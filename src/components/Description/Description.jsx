// export default function Description() {
//     return (
//       <div>
//         <h2>Sip Happens Café</h2>
//         <p>
//           Please leave your feedback about our service by selecting one of the
//           options below.
//         </p>
//       </div>
//     );
//   }

import PropTypes from 'prop-types';

const Description = ({ heading, paragraph }) => {
  return (
    <>
      <h1>{heading}</h1>
      <p>{paragraph}</p>
    </>
  );
};

export default Description;

Description.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};