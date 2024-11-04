'use server';

import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

import prisma from '@/lib/prisma';
import { createWorkflowSchema, type createWorkflowSchemaType } from '@/schema/workflows';
import { WorkflowStatus } from '@/types/workflow';

export async function createWorkflow(form: createWorkflowSchemaType) {
  const { success, data } = createWorkflowSchema.safeParse(form);

  if (!success) {
    throw new Error('Invalid form data');
  }

  const { userId } = auth();

  if (!userId) {
    throw new Error('Unauthenticated');
  }

  const result = await prisma.workflow.create({
    data: {
      userId,
      status: WorkflowStatus.DRAFT,
      definition: 'TODO',
      ...data,
    },
  });

  if (!result) {
    throw new Error('Failed to create workflow');
  }

  redirect(`/workflow/editor/${result.id}`);
}
