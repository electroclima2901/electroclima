import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { Container, Divider, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo-white.png";

function Footer() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box component="footer" sx={{ mt: "auto" }}>
      <Box
        sx={{
          backgroundColor: theme.palette.grey[800],
          color: "grey.300",
          py: 4,
          px: { xs: 2, md: 10 },
          textAlign: "left",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid
              size={{ xs: 12, sm: 4 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={logo} alt="electroclima-logo" height={200} />
            </Grid>

            <Grid
              size={{ xs: 12, sm: 4 }}
              sx={{ color: theme.palette.text.secondary }}
            >
              <Typography variant="h5" gutterBottom>
                {t("footer.contact")}
              </Typography>
              <Divider
                sx={{ backgroundColor: theme.palette.background.paper, mb: 2 }}
              />
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link
                  href="tel:+306984721712"
                  underline="hover"
                  color="inherit"
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <PhoneIphoneIcon />
                  +30 698 472 1712
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link
                  href="tel:+302810313505"
                  underline="hover"
                  color="inherit"
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <LocalPhoneIcon />
                  +30 2810 313505
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link
                  href="mailto:electroclima2901@gmail.com"
                  underline="hover"
                  color="inherit"
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <EmailIcon />
                  electroclima2901@gmail.com
                </Link>
              </Typography>
            </Grid>

            <Grid
              size={{ xs: 12, sm: 4 }}
              sx={{ color: theme.palette.text.secondary }}
            >
              <Typography variant="h5" gutterBottom>
                {t("footer.additionalInfo")}
              </Typography>
              <Divider
                sx={{ backgroundColor: theme.palette.background.paper, mb: 2 }}
              />
              <Box sx={{ mb: 2 }}>
                <Link
                  href="https://maps.app.goo.gl/W45KTAJVEwCbRRxK8"
                  underline="hover"
                  color="inherit"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <LocationPinIcon sx={{ color: theme.palette.error.main }} />
                  <Typography variant="body2">{t("footer.findUs")}</Typography>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: 2,
          px: { xs: 3, sm: 6 },
          backgroundColor: theme.palette.grey[900],
          textAlign: "center",
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="body2" color="text.secondary">
            © 2025 {t("footer.title")}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
