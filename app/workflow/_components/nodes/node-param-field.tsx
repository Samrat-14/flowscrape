'use client';

import { useCallback } from 'react';
import { useReactFlow } from '@xyflow/react';

import StringParam from './param/string-param';

import { TaskParam, TaskParamType } from '@/types/task';
import { AppNode } from '@/types/appnode';

export default function NodeParamField({ param, nodeId }: { param: TaskParam; nodeId: string }) {
  const { updateNodeData, getNode } = useReactFlow();
  const node = getNode(nodeId) as AppNode;
  const value = node?.data.inputs?.[param.name];

  const updateNodeParamValue = useCallback(
    (newValue: string) => {
      updateNodeData(nodeId, {
        inputs: {
          ...node?.data.inputs,
          [param.name]: newValue,
        },
      });
    },
    [nodeId, updateNodeData, param.name, node?.data.inputs]
  );

  switch (param.type) {
    case TaskParamType.STRING:
      return <StringParam param={param} value={value} updateNodeParamValue={updateNodeParamValue} />;
    default:
      return (
        <div className="w-full">
          <p className="text-xs text-muted-foreground">Not implemented</p>
        </div>
      );
  }
}
