import * as React from "react";
import { Link } from "gatsby";
import { notFound } from '../components/style.module.css';


const headingStyles = {
  fontSize: "9rem",
  margin: '0',
  paddingTop: '4rem'
};

const subHeadingStyles = {
  fontSize: "2rem",
  marginTop: '0.2rem'
};

const paragraphStyles = {
  fontSize: "1.3rem"
};

const linkStyles = {
  fontWeight: '700',
  padding: 4,
  fontSize: "1.25rem",
  textDecoration: 'none'
};



const NotFoundPage = () => {
  return (
    <main className={notFound}>
      <h1 style={headingStyles}>404</h1>
      <h4 style={subHeadingStyles}>Page not found</h4>
      <p style={paragraphStyles}>
        We couldn’t find what you were looking for.
        <br />
        Visit the
        <Link style={linkStyles} to="/"> homepage</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
