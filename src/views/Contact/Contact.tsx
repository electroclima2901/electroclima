import { Container, Grid, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Trans, useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="xl">
      <Grid container spacing={4} sx={{ py: 4 }}>
        {/* Αριστερή Στήλη */}
        <Grid size={{ xs: 12, sm: 6 }} sx={{ px: { xs: 3, sm: 6 } }}>
          <Box component="section">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ textAlign: "center" }}
            >
              {t("contact.title")}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                <Trans i18nKey="contact.text1" components={{ 1: <strong /> }} />
              </Typography>

              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {t("contact.text2")}
              </Typography>

              <Typography variant="body1" sx={{ textAlign: "center" }}>
                📞 <strong>{t("contact.contactPhone")}</strong>
                <br />
                <Link
                  href="tel:+306984721712"
                  underline="hover"
                  color="inherit"
                >
                  +30 698 472 1712
                </Link>
                <br />
                <Link
                  href="tel:+302810313505"
                  underline="hover"
                  color="inherit"
                >
                  +30 2810 313505
                </Link>
              </Typography>

              <Typography variant="body1" sx={{ textAlign: "center" }}>
                ✉️ <strong>{t("contact.email")}</strong>
                <br />
                <Link
                  href="mailto:electroclima2901@gmail.com"
                  underline="hover"
                  color="inherit"
                >
                  electroclima2901@gmail.com
                </Link>
              </Typography>

              <Typography variant="body1" sx={{ textAlign: "center" }}>
                📍 <strong>{t("contact.location")}</strong>
                <br />
                <Link
                  href="https://www.google.com/maps?ll=35.33551,25.09678&z=14&t=m&hl=el&gl=GR&mapclient=embed&q=%CE%A5%CE%B3%CE%B5%CE%AF%CE%B1%CF%82+3+%CE%93%CE%AC%CE%B6%CE%B9+714+14"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  color="inherit"
                >
                  {t("contact.locationDetails")}
                </Link>
              </Typography>

              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {t("contact.happyToHelp")}
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Δεξιά Στήλη - Χάρτης */}
        <Grid
          size={{ xs: 12, sm: 6 }}
          sx={{ minHeight: "30rem", px: { xs: 3, sm: 6 } }}
        >
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
