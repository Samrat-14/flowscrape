import { LucideProps } from 'lucide-react';

import { TaskParam, TaskType } from '@/types/task';

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
