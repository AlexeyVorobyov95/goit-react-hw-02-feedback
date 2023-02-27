import { Global, css } from '@emotion/react';


export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
          font-size: 14px;
          font-family: sans-serif;
          line-height: 1.5;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
          padding: 0;
        }
        ul,
        ol {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        img {
          display: block;
          max-width: 100%;
          height: auto;
        }
        button {
          padding: 0;
          border: none;
          font: inherit;
          color: inherit;
          background-color: transparent;
          cursor: pointer;
        }
      `}
    />
  );
};
