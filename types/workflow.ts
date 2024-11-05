import { LucideProps } from 'lucide-react';

import { TaskParam, TaskType } from '@/types/task';
import { AppNode } from '@/types/appnode';

export enum WorkflowStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
}

export type WorkflowTask = {
  type: TaskType;
  label: string;
  icon: React.FC<LucideProps>;
  isEntryPoint?: boolean;
  inputs: TaskParam[];
  outputs: TaskParam[];
  credits: number;
};

export type WorkflowExecutionPlanPhase = {
  phase: number;
  nodes: AppNode[];
};

export type WorkflowExecutionPlan = WorkflowExecutionPlanPhase[];
