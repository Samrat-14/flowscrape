'use client';

import { useCallback } from 'react';
import { useReactFlow } from '@xyflow/react';

import StringParam from '@/app/workflow/_components/nodes/param/string-param';
import BrowserInstanceParam from '@/app/workflow/_components/nodes/param/browser-instance-param';

import { TaskParam, TaskParamType } from '@/types/task';
import { AppNode } from '@/types/appnode';

export default function NodeParamField({
  param,
  nodeId,
  disabled,
}: {
  param: TaskParam;
  nodeId: string;
  disabled: boolean;
}) {
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
      return (
        <StringParam param={param} value={value} updateNodeParamValue={updateNodeParamValue} disabled={disabled} />
      );
    case TaskParamType.BROWSER_INSTANCE:
      return <BrowserInstanceParam param={param} value={''} updateNodeParamValue={updateNodeParamValue} />;
    default:
      return (
        <div className="w-full">
          <p className="text-xs text-muted-foreground">Not implemented</p>
        </div>
      );
  }
}
