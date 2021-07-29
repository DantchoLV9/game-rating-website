import React from "react";
import StyledLink from "../StyledLink";
import {
	connectStateResults,
	Hits,
	Index,
	PoweredBy,
} from "react-instantsearch-dom";

import styled from "styled-components";

const HitCount = connectStateResults(({ searchResults }) => {
	const hitCount = searchResults && searchResults.nbHits;

	return hitCount > 0 ? (
		<div className="HitCount">
			{hitCount} result{hitCount !== 1 ? `s` : ``}
		</div>
	) : null;
});

const Results = connectStateResults(
	({ searchState, searchResults, children }) =>
		searchResults && searchResults.nbHits !== 0 ? (
			children
		) : (
			<div className="no-results-msg">
				No results have been found for {searchState.query}.
			</div>
		)
);

const GameHit = ({ hit }) => {
	let numberOfRatings = 0;
	for (let key in hit.rating) {
		if (hit.rating[key] != null) {
			numberOfRatings++;
		}
	}
	const overAllRating =
		(hit.rating.graphics + hit.rating.gameplay + hit.rating.story) /
		numberOfRatings;

	return (
		<StyledHit>
			<StyledLink to={hit.slug}>
				<h4>{hit.title}</h4>
				<p>{Math.round((overAllRating + Number.EPSILON) * 100) / 100} / 5</p>
			</StyledLink>
		</StyledHit>
	);
};

const HitsInIndex = ({ index }) => (
	<Index indexName={index.name}>
		<HitCount />
		<Hits className="hits" hitComponent={GameHit} />
	</Index>
);

const SearchResult = ({ indices, show }) => (
	<StyledSearchResults show={show}>
		<Results>
			{indices.map((index) => (
				<HitsInIndex index={index} key={index.name} />
			))}
		</Results>
		<PoweredBy />
	</StyledSearchResults>
);

const StyledHit = styled.div`
	a {
		padding: 1em;
		display: flex;
		justify-content: space-between;
		p {
			margin-left: 0.5rem;
			font-weight: bold;
			color: ${(props) => props.theme.fg};
		}
	}
	:hover {
		background: ${(props) => props.theme.hover};
	}
`;

const StyledSearchResults = styled.div`
	display: ${(props) => (props.show ? `block` : `none`)};
	max-height: 50vh;
	overflow: scroll;
	-webkit-overflow-scrolling: touch;
	position: absolute;
	z-index: 2;
	right: 0;
	top: 100%;
	margin-top: 0.5em;
	box-shadow: 0px 0px 3px 0px;
	border-radius: 10px;
	background: ${(props) => props.theme.bg};
	overflow: auto;
	.no-results-msg {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2rem;
	}
	.HitCount {
		display: flex;
		justify-content: flex-start;
		padding: 0.5rem 0 0.5rem 1rem;
		border-bottom: 1px solid ${(props) => props.theme.border};
	}
	.hits {
		ul {
			list-style: none;
			margin-left: 0;
		}
		li.ais-Hits-item {
			a {
				color: ${(props) => props.theme.fg};
			}
		}
	}
	.ais-PoweredBy {
		display: flex;
		justify-content: center;
		padding: 1rem;
		align-items: center;
		border-top: 1px solid ${(props) => props.theme.border};
		span {
			margin-right: 0.5rem;
		}
	}
`;

export default SearchResult;
