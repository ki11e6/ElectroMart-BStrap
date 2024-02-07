import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To ElectoMart',
  description: 'We sell the best quality products for everyday use',
  keywords: 'electronics, buy electronics, quality electroincs',
};

export default Meta;
