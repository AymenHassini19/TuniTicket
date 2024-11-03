import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'TuniTicket',
  description: 'We sell event tickets in Tunisia for the best prices',
  keywords: 'Tunisia events, buy ticket, tunisian festival',
};

export default Meta;
