import { Box, Typography, useTheme } from "@mui/material";

import LazyLoad from "../utils/LazyLoad.jsx";
import InfoList from "../common/InfoList.jsx";
import SocialIcons from "../common/SocialIcons.jsx";
import HorizontalDivider from "../common/HorizontalDivider.jsx";
import {
  locations,
  contactDetails,
  socialLinks,
  maps,
  companyName,
} from "../../data/footerData.jsx";
import MapSection from "./MapSection.jsx";
import Copyright from "./Copyright.jsx";
import { getStyles } from "./FooterStyle";

const Footer = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <Box sx={styles.container}>
      <HorizontalDivider />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
        }}
      >
        <Box sx={styles.infoContainer}>
          <Typography variant="h6" sx={styles.title}>
            Свържете се с нас
          </Typography>
          <InfoList
            items={contactDetails}
            textStyle={styles.infoList.textStyle}
            iconColor={styles.infoList.iconColor}
            linkColor={styles.infoList.linkColor}
            motionProps={styles.infoList.motionProps}
          />

          <Typography variant="h6" sx={styles.title}>
            Нашите локации
          </Typography>
          <InfoList
            items={locations}
            textStyle={styles.infoList.textStyle}
            iconColor={styles.infoList.iconColor}
            linkColor={styles.infoList.linkColor}
            motionProps={styles.infoList.motionProps}
          />

          <Typography variant="h6" sx={styles.title}>
            Последвайте ни
          </Typography>
          <SocialIcons socialLinks={socialLinks} />
        </Box>

        <Box sx={styles.mapContainer}>
          {maps.map((map, index) => (
            <Box key={index} sx={styles.mapBox}>
              <LazyLoad customStyles={{ width: "100%" }} delay={index + 1}>
                <MapSection title={map.title} src={map.src} />
              </LazyLoad>
            </Box>
          ))}
        </Box>
      </Box>

      <HorizontalDivider />

      <LazyLoad delay={1.5}>
        <Copyright companyName={companyName} />
      </LazyLoad>

      <HorizontalDivider />
    </Box>
  );
};

export default Footer;
