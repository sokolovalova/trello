import * as React from 'react';
import { ReactComponentElement } from "react";

interface Board{
    id: string;
    name: string;
    pinned: boolean;
    desc? : string;
  }
  
export interface AppState{
    token: string;
    boards: Array<Board>;
  }
  
export interface Routes{
  path: string;
  component: any;
  // render: (props: any) => any,
  title?: string;
  exact?: boolean;
  isHidden?:boolean;
}