'use client';
import React from 'react';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '@components/Form';
const CreatePrompt = () => {
	const [submitting, setsubmitting] = useState(false);
	const [post, setPost] = useState({
		prompt: '',
		tag: '',
	});

	const CreatePrompt = async (e) => {};
	return <Form />;
};

export default CreatePrompt;
