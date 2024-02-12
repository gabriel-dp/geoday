import styled from "styled-components";

export const CategoryItem = styled.div<{ $bg: string }>`
	aspect-ratio: 1;
	height: 100%;
	padding: 0.5rem;
	border-radius: 100rem;
	background-color: ${(props) => props.$bg};
	border: 1px solid ${(props) => props.theme.primary};
	font-size: 0.75rem;
	position: relative;

	display: flex;
	justify-content: center;
	align-items: center;

	.icon {
		font-size: 1.5rem;
	}

	* {
		text-shadow: 0px 0px 4px ${(props) => props.theme.background};
	}
`;

export const Arrow = styled.div<{ $angle?: string; $distance: "far" | "near" }>`
	height: 50%;
	position: absolute;
	top: 0;
	transform-origin: 0 100%;
	transform: rotate(${(props) => props.$angle}deg);

	&::before {
		content: "";
		position: absolute;
		top: ${(props) => (props.$distance == "far" ? "0.5rem" : "1rem")};
		transform: translateX(-50%);
		height: 0;

		border-bottom: 5px solid ${(props) => props.theme.primary};
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		filter: drop-shadow(0 0 1px ${(props) => props.theme.background});
	}
`;
