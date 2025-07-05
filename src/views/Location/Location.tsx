import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

function Location() {
  const { t } = useTranslation();
  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 3,
        display: "flex",
      }}
    >
      <Grid container sx={{ display: "flex", gap: 5 }}>
        <Grid size={{ xs: 12 }}>
          <Box component="section">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ textAlign: "center" }}
            >
              {t("location.title")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {t("location.text1")}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {t("location.text2")}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {t("location.text3")}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12 }} sx={{ minHeight: "30rem" }}>
          {/* <Grid size={{ xs: 12 }} sx={{ minHeight: { md: '30rem' } }}> */}
          <Box component="section" sx={{ width: 1, height: 1 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13019.242186082625!2d25.078325793199024!3d35.33552580277488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149a59fdca4e0163%3A0xd2687dbd4a417b17!2zzqXOs861zq_Osc-CIDMsIM6TzqzOts65IDcxNCAxNA!5e0!3m2!1sel!2sgr!4v1751706408401!5m2!1sel!2sgr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Location;
