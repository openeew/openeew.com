import React from 'react';
import { HomepageBanner } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';

const BannerText = () => (
  <h1 className="banner-header">
    An open-source earthquake-alerting project <span className="emphasize">helping people get out of harm's
    way</span>
  </h1>
);

const customProps = {
  Banner: (
    <>
      <HomepageBanner renderText={BannerText} />
    </>
  ),
  // gatsby-carbon notes: If you don't define the callout's, gatsby-carbon will do it for you. 
  FirstCallout: (
    <>
    </>
  ),
  SecondCallout: (
    <>
    </>
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
