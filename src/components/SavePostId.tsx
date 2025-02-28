// components/SavePostId.tsx
'use client';
import { useEffect } from 'react';

interface SavePostIdProps {
  postId: string;
}

export default function SavePostId({
  postId,
}: SavePostIdProps) {
  useEffect(() => {
    window.sessionStorage.setItem('currentPostId', postId);
    console.log(
      '[SavePostId] Salvando currentPostId:',
      postId
    );
  }, [postId]);

  return null;
}
