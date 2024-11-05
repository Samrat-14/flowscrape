'use client';

import { Workflow } from '@prisma/client';
import { ReactFlowProvider } from '@xyflow/react';

import FlowEditor from '@/app/workflow/_components/flow-editor';
import Topbar from '@/app/workflow/_components/topbar/topbar';
import TaskMenu from '@/app/workflow/_components/task-menu';

export default function Editor({ workflow }: { workflow: Workflow }) {
  return (
    <ReactFlowProvider>
      <div className="flex flex-col h-full w-full overflow-hidden">
        <Topbar title="Workflow editor" subtitle={workflow.name} workflowId={workflow.id} />
        <section className="flex h-full overflow-auto">
          <TaskMenu />
          <FlowEditor workflow={workflow} />
        </section>
      </div>
    </ReactFlowProvider>
  );
}
