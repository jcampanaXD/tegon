/** Copyright (c) 2024, Tegon, all rights reserved. **/

import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from 'components/ui/avatar';
import { Button } from 'components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from 'components/ui/dropdown-menu';

export interface WorkspaceDropdownProps {
  isCollapsed: boolean;
}

export function WorkspaceDropdown({ isCollapsed }: WorkspaceDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="px-1">
          <div className="flex justify-between">
            <Avatar className="h-[20px] w-[30px] ">
              <AvatarImage />
              <AvatarFallback className="bg-teal-500 dark:bg-teal-900 text-xs rounded-sm">
                BO
              </AvatarFallback>
            </Avatar>
            {!isCollapsed && <div className="ml-2"> Born4rhell</div>}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-60" align="start">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Workspace settings
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Invite & manage members
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
