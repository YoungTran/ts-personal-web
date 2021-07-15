import styled from '@emotion/styled';
import React from 'react';

const ContactContainer = styled.div`
  color: var(--text-color);
  padding: 6em 0 1em 0;
  ul {
    display: flex;
  }
  div {
    padding: 2em 0;
  }
`;

const Contact = (): JSX.Element => {
  return (
    <ContactContainer>
      <h1 className="text-2xl">Contact</h1>
      <div className="flex justify-center">
        <p className="sm:text-xl sm:text-center text-justify sm:w-2/3">
          I'm always up for chatting in terms of professional work and/or
          opportunities in the technology space. You can reach me through
          multiple social networks or email.
        </p>
      </div>
      <ul className="sm:space-x-12 space-x-4">
        <li>
          <a href="https://www.linkedin.com/in/youngtrann">
            <i className="fa fa-linkedin sm:text-6xl text-2xl text-white hover:text-gray-600"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/ynngtran">
            <i className="fa fa-twitter sm:text-6xl text-2xl text-white hover:text-gray-600"></i>
          </a>
        </li>
        <li>
          <a href="mailto: youngtran42@gmail.com">
            <i className="fa fa-envelope sm:text-6xl text-2xl text-white hover:text-gray-600"></i>
          </a>
        </li>
      </ul>
    </ContactContainer>
  );
};

export default Contact;
