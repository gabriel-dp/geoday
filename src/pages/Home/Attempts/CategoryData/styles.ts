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
`;

export const Arrow = styled.div<{ $angle?: string }>`
	height: 50%;
	position: absolute;
	top: 0;
	transform-origin: 0 100%;
	transform: rotate(${(props) => props.$angle}deg);

	&::before {
		content: "";
		position: absolute;
		top: 0.5rem;
		transform: translateX(-50%);
		height: 0;

		border-bottom: 5px solid ${(props) => props.theme.light};
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
	}
`;
