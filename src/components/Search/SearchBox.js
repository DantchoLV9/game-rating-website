import React from "react";
import styled, { css } from "styled-components";
import { connectSearchBox } from "react-instantsearch-dom";
import SearchIcon from "../../images/search-icon.js";

const SearchBox = ({ currentRefinement, refine, onFocus, hasFocus }) => (
	<StyledForm>
		<StyledSearchInput
			hasFocus={hasFocus}
			type="search"
			placeholder="Search"
			aria-label="Search"
			value={currentRefinement}
			onChange={(event) => refine(event.currentTarget.value)}
			onFocus={onFocus}
		/>
		<SearchIcon />
	</StyledForm>
);

const StyledForm = styled.form`
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	margin-bottom: 0;
	width: 100%;
	:focus-within {
		color: ${(props) => props.theme.buttonText};
	}
	svg {
		width: 20px;
		height: 20px;
		margin-right: -0.1rem;
		pointer-events: none;
	}
`;

const OpenInputField = css`
	width: 100%;
	background: ${(props) => props.theme.buttonBG};
	cursor: text;
	margin-left: -1.6rem;
	padding-left: 1.7rem;
`;

const ClosedInputField = css`
	width: 0;
	background: transparent;
	cursor: pointer;
	margin-left: -1.5rem;
	padding-left: 1.5rem;
`;

const StyledSearchInput = styled.input`
	outline: none;
	padding: 0.5rem;
	border: 2px transparent solid;
	border-radius: 10px;
	font-size: 1.2rem;
	transition: 150ms;
	color: ${(props) => props.theme.buttonText};
	${({ hasFocus }) => (hasFocus ? OpenInputField : ClosedInputField)}
	:focus {
		border: 2px solid ${(props) => props.theme.border};
	}
`;

export default connectSearchBox(SearchBox);
