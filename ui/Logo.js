import PropTypes from "prop-types";
import Image from 'next/image';

export const Logo = (props) => (
  <Image src="/logo.png" alt="Vercel Logo" width={256} height={100} />
);

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};