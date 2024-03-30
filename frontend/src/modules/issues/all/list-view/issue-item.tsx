/** Copyright (c) 2024, Tegon, all rights reserved. **/
import { RiArrowRightSLine } from '@remixicon/react';
import dayjs from 'dayjs';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';

import {
  IssueAssigneeDropdown,
  IssueAssigneeDropdownVariant,
  IssuePriorityDropdown,
  IssuePriorityDropdownVariant,
  IssueStatusDropdown,
  IssueStatusDropdownVariant,
} from 'modules/issues/components';

import { cn } from 'common/lib/utils';
import { IssueRelationEnum } from 'common/types/issue-relation';

import { Badge } from 'components/ui/badge';
import { useCurrentTeam } from 'hooks/teams/use-current-team';
import { BlockedFill, BlockingToLine } from 'icons';

import { useUpdateIssueMutation } from 'services/issues/update-issue';

import { useContextStore } from 'store/global-context-provider';

import { IssueLabels } from './issue-labels';

interface IssueItemProps {
  issueId: string;
}

export const IssueItem = observer(({ issueId }: IssueItemProps) => {
  const team = useCurrentTeam();
  const {
    push,
    query: { workspaceSlug },
  } = useRouter();
  const { mutate: updateIssue } = useUpdateIssueMutation({});
  const { issuesStore, issueRelationsStore } = useContextStore();
  const issue = issuesStore.getIssueById(issueId);
  const blockedIssues = issueRelationsStore.getIssueRelationForType(
    issue.id,
    IssueRelationEnum.BLOCKED,
  );
  const blocksIssues = issueRelationsStore.getIssueRelationForType(
    issue.id,
    IssueRelationEnum.BLOCKS,
  );

  const statusChange = (stateId: string) => {
    updateIssue({ id: issue.id, stateId, teamId: issue.teamId });
  };

  const assigneeChange = (assigneeId: string) => {
    updateIssue({ id: issue.id, assigneeId, teamId: issue.teamId });
  };

  const priorityChange = (priority: number) => {
    updateIssue({ id: issue.id, priority, teamId: issue.teamId });
  };

  return (
    <a
      className="pl-8 p-2.5 flex justify-between cursor-default text-sm hover:bg-slate-100 dark:hover:bg-slate-800/20 border-b-[0.5px]"
      onClick={() => {
        push(`/${workspaceSlug}/issue/${team.identifier}-${issue.number}`);
      }}
    >
      <div className="flex items-center grow">
        <IssuePriorityDropdown
          value={issue.priority ?? 0}
          onChange={priorityChange}
          variant={IssuePriorityDropdownVariant.NO_BACKGROUND}
        />
        <div className="pr-3 text-muted-foreground min-w-[68px]">{`${team.identifier}-${issue.number}`}</div>
        <div className="pr-3">
          <IssueStatusDropdown
            value={issue.stateId}
            onChange={statusChange}
            variant={IssueStatusDropdownVariant.NO_BACKGROUND}
            teamIdentfier={team.identifier}
          />
        </div>
        <div
          className={cn(
            'font-medium',
            issue.parentId ||
              blockedIssues.length > 0 ||
              blocksIssues.length > 0
              ? 'max-w-[500px]'
              : 'w-full',
          )}
        >
          <div className="truncate">{issue.title}</div>
        </div>

        {issue.parentId && (
          <div className="font-medium max-w-[300px] text-muted-foreground flex items-center">
            <RiArrowRightSLine size={14} className="mx-1" />
            <div className="truncate">{issue.parent?.title}</div>
          </div>
        )}

        {blockedIssues.length > 0 && (
          <Badge
            variant="outline"
            className="mx-2 px-2 flex gap-2 text-muted-foreground"
          >
            <BlockedFill size={14} className="text-red-700 dark:text-red-400" />
            {blockedIssues.length}
          </Badge>
        )}
        {blocksIssues.length > 0 && (
          <Badge
            variant="outline"
            className="mx-2 px-2 flex gap-2 text-muted-foreground"
          >
            <BlockingToLine
              size={14}
              className="text-red-700 dark:text-red-400"
            />
            {blocksIssues.length}
          </Badge>
        )}
      </div>
      <div className="flex gap-2 items-center">
        <div>
          <IssueLabels labelIds={issue.labelIds} />
        </div>
        <div className="text-muted-foreground text-sm">
          {dayjs(issue.createdAt).format('DD MMM')}
        </div>
        <IssueAssigneeDropdown
          value={issue.assigneeId}
          onChange={assigneeChange}
          variant={IssueAssigneeDropdownVariant.NO_BACKGROUND}
        />
      </div>
    </a>
  );
});
