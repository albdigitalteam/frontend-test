import React, { useEffect, useRef } from 'react';
import { StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { Search } from 'react-native-feather';

import { Form } from '@unform/mobile';
import { FormHandles, SubmitHandler } from '@unform/core';
import { useNavigation } from '@react-navigation/core';

import { BoxVertical, CenterAll, Container, Content, TitlePage, SubTitle } from './styled';
import { Input, PostItem, SimpleLoading } from '#components/index';
import { fetchingPosts, filterPosts } from '#actions/post/actions';
import { AppState } from '#interfaces/App';
import { useTheme } from '#hooks/theme';

const Home = () => {
	const insets = useSafeAreaInsets();
	const formRef = useRef<FormHandles>(null);
	const { navigate } = useNavigation();
	const dispatch = useDispatch();
	const { loading, posts } = useSelector((state: AppState) => state.post);
	const { colors, normalizeWidth } = useTheme()

	const handleSubmit: SubmitHandler<{ search: string }> = (data) => {
		console.log(formRef);
		console.log(data);
		dispatch(filterPosts(data.search));
	}

	useEffect(() => {
		dispatch(fetchingPosts())
	}, [])

	const renderPosts = () => {
		const categories = ['entertainment', 'games', 'culture', 'sports'];
		return posts.map((post) => {
			const category = categories[Math.floor(Math.random() * categories.length)]
			return (
			<PostItem
				goToDetail={() => navigate('PostDetail', { item: {...post, category } })}
				key={post.id}
				category={category}
				title={post.title}
				summary={post.body}
				created={new Date()}
				author={post.user.name}
				picture={`https://picsum.photos/300/200.jpg`}
			/>
		)})
	}

	if (loading) {
		return <SimpleLoading />
	}

	return (
		<Container insets={insets}>
			<StatusBar animated barStyle='dark-content' translucent backgroundColor="transparent" />
			<BoxVertical>
				<CenterAll>
					<TitlePage>Posts</TitlePage>
					<Form ref={formRef} onSubmit={handleSubmit}>
						<Input
							name="search"
							placeholder='Pesquise aqui'
							rightIcon={<Search stroke={colors.text} />}
							inputWidth={normalizeWidth(300)}
							rightAction={() => formRef.current?.submitForm()}
						/>
					</Form>
				</CenterAll>
			</BoxVertical>
			<Content>
				<SubTitle>Para você</SubTitle>
				{renderPosts()}
			</Content>	
		</Container>
	);
};

export default Home;
