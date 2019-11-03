import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import useBestSeller from "./hooks";
import _ from 'lodash';
import {shortenStr} from "../util/string";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles(theme => ({
	toolbar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	toolbarTitle: {
		flex: 1,
	},
	toolbarSecondary: {
		justifyContent: 'space-between',
		overflowX: 'auto',
		marginTop: '100px',
	},
	toolbarLink: {
		padding: theme.spacing(1),
		flexShrink: 0,
	},
	mainFeaturedPost: {
		position: 'relative',
		backgroundColor: theme.palette.grey[800],
		color: theme.palette.common.white,
		marginBottom: theme.spacing(4),
		backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
	},
	overlay: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: 'rgba(0,0,0,.3)',
	},
	mainFeaturedPostContent: {
		position: 'relative',
		padding: theme.spacing(3),
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing(6),
			paddingRight: 0,
		},
	},
	mainGrid: {
		marginTop: theme.spacing(3),
	},
	card: {
		display: 'flex',
	},
	cardDetails: {
		flex: 1,
	},
	cardMedia: {
		width: 160,
	},
	markdown: {
		...theme.typography.body2,
		padding: theme.spacing(3, 0),
	},
	sidebarAboutBox: {
		padding: theme.spacing(2),
		backgroundColor: theme.palette.grey[200],
	},
	sidebarSection: {
		marginTop: theme.spacing(3),
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		marginTop: theme.spacing(8),
		padding: theme.spacing(6, 0),
	},
	textField: {
		width: '35%'
	}
}));

const sections = [
	'Technology',
	'Design',
	'Culture',
	'Business',
	'Politics',
	'Opinion',
	'Science',
	'Health',
	'Style',
	'Travel',
];

const featuredPosts = [
	{
		title: 'Featured post',
		date: 'Nov 12',
		description:
			'This is a wider card with supporting text below as a natural lead-in to additional content.',
	},
	{
		title: 'Post title',
		date: 'Nov 11',
		description:
			'This is a wider card with supporting text below as a natural lead-in to additional content.',
	},
];

const archives = [
	'March 2020',
	'February 2020',
	'January 2020',
	'December 2019',
	'November 2019',
	'October 2019',
	'September 2019',
	'August 2019',
	'July 2019',
	'June 2019',
	'May 2019',
	'April 2019',
];

export default function Blog() {
	const classes = useStyles();
	const {bookItems} = useBestSeller();
	// const bookViewItemsInfo: good = bookItems.payload.slice(0, 5);
	
	return (
		<React.Fragment>
			<CssBaseline/>
			<Container maxWidth="lg">
				<Toolbar className={classes.toolbar}>
					<Typography
						component="h2"
						variant="h5"
						color="inherit"
						align="left"
						noWrap
						className={classes.toolbarTitle}
					>
						Blog
					</Typography>
					<TextField
						label="search"
						className={classes.textField}
						InputProps={{
							endAdornment: (
								<InputAdornment position={"end"}>
									<IconButton>
										<SearchIcon/>
									</IconButton>
								</InputAdornment>
							)
						}}
					/>
				</Toolbar>
				<Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
					{sections.map(section => (
						<Link
							color="inherit"
							noWrap
							key={section}
							variant="body2"
							href="#"
							className={classes.toolbarLink}
						>
							{section}
						</Link>
					))}
				</Toolbar>
				{!(_.isEmpty(bookItems)) && (
					<main>
						{/* Main featured post */}
						<Paper className={classes.mainFeaturedPost}>
							{/* Increase the priority of the hero background image */}
							{
								<img
									style={{display: 'none'}}
									src="https://source.unsplash.com/user/erondu"
									alt="background"
								/>
							}
							<div className={classes.overlay}/>
							<Grid container>
								<Grid item md={6}>
									<div className={classes.mainFeaturedPostContent}>
										<Typography component="h1" variant="h3" color="inherit" gutterBottom>
											Title of a longer featured blog post
										</Typography>
										<Typography variant="h5" color="inherit" paragraph>
											Multiple lines of text that form the lede, informing new readers quickly and
											efficiently about what&apos;s most interesting in this post&apos;s contents.
										</Typography>
										<Link variant="subtitle1" href="#">
											Continue reading…
										</Link>
									</div>
								</Grid>
							</Grid>
						</Paper>
						{/* End main featured post */}
						{/* Sub featured posts */}
						<Grid container spacing={4}>
							{bookItems.map(post => (
								<Grid item key={post.title} xs={12} md={6}>
									<CardActionArea component="a" href="#">
										<Card className={classes.card}>
											<div className={classes.cardDetails}>
												<CardContent>
													<Typography component="h2" variant="h5">
														{post.title}
													</Typography>
													<Typography variant="subtitle1" color="textSecondary">
														{post.author}
													</Typography>
													<Typography variant="subtitle1" paragraph>
														{shortenStr(post.description, 100, true)}
													</Typography>
													<Typography variant="subtitle1" color="primary">
														Continue reading...
													</Typography>
												</CardContent>
											</div>
											<Hidden xsDown>
												<CardMedia
													className={classes.cardMedia}
													image={post.coverLargeUrl}
													title="Image title"
												/>
											</Hidden>
										</Card>
									</CardActionArea>
								</Grid>
							))}
						</Grid>
						{/* End sub featured posts */}
						<Grid container spacing={5} className={classes.mainGrid}>
							{/* Main content */}
							{/* End main content */}
							{/* Sidebar */}
							<Grid item xs={12} md={4}>
							
							</Grid>
							{/* End sidebar */}
						</Grid>
					</main>
				)}
			</Container>
			{/* Footer */}
			<footer className={classes.footer}>
				<Container maxWidth="lg">
					<Typography variant="h6" align="center" gutterBottom>
						Footer
					</Typography>
					<Typography variant="subtitle1" align="center" color="textSecondary" component="p">
						Something here to give the footer a purpose!
					</Typography>
					<Copyright/>
				</Container>
			</footer>
			{/* End footer */}
		</React.Fragment>
	);
}