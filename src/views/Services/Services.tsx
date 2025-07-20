// import FridgeIcon from '@mui/icons-material/Kitchen';
import BoltIcon from "@mui/icons-material/Bolt";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Box, Container, Grid, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import HandshakeIcon from "../../widgets/CustomIcons/HandshakeIcon";

export function Services() {
  const { t } = useTranslation();
  const theme = useTheme();

  const services = [
    { label: t("services.electricalStudies") },
    { label: t("services.electricalInstallations") },
    { label: t("services.industrialInstallations") },
    { label: t("services.residentialCommercial") },
    { label: t("services.energyInspections") },
    { label: t("services.energyUpgrade") },
    { label: t("services.certifications") },
    { label: t("services.airConditioningInstall") },
    { label: t("services.airConditioningMaintenance") },
    { label: t("services.repairs") },
    { label: t("services.techSupport") },
    { label: t("services.energyOptimization") },
  ];
  return (
    <Grid container>
      <Grid
        size={{ xs: 12 }}
        sx={{
          display: "flex",
          backgroundColor: theme.palette.primary.dark,
          padding: "1rem",
          color: theme.palette.text.secondary,
          width: 1,
          height: 1,
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            py: { md: 3 },
            display: "flex",
          }}
        >
          <Grid container spacing={3} sx={{ display: "flex", width: 1 }}>
            <Grid
              size={{ xs: 12, sm: 4 }}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <TaskAltIcon
                sx={{
                  fontSize: {
                    xs: "2rem",
                    sm: "3rem",
                    md: "4rem",
                    lg: "5rem",
                  },
                }}
              />
              <Box>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {t("services.quality")}
                </Typography>
                <Typography variant="body2">
                  {t("services.qualityComment")}
                </Typography>
              </Box>
            </Grid>

            <Grid
              size={{ xs: 12, sm: 4 }}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <BoltIcon
                sx={{
                  fontSize: {
                    xs: "2rem",
                    sm: "3rem",
                    md: "4rem",
                    lg: "5rem",
                  },
                }}
              />
              <Box>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {t("services.quickService")}
                </Typography>
                <Typography variant="body2">
                  {t("services.quickServiceComment")}
                </Typography>
              </Box>
            </Grid>

            <Grid
              size={{ xs: 12, sm: 4 }}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <HandshakeIcon
                sx={{
                  fontSize: {
                    xs: "2rem",
                    sm: "3rem",
                    md: "4rem",
                    lg: "5rem",
                  },
                }}
              />
              <Box>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {t("services.guarantee")}
                </Typography>
                <Typography variant="body2">
                  {t("services.guaranteeComment")}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Container maxWidth="xl" sx={{ py: 3 }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12 }}>
            <Box component="section">
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{ textAlign: "center" }}
              >
                {t("services.title")}
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 8 }} sx={{ px: { xs: 3, sm: 6 } }}>
            <Box
              component="section"
              sx={{ display: "flex", flexDirection: "column", gap: 5 }}
            >
              <Box>
                <Typography variant="h5" sx={{ textAlign: "justify" }}>
                  {t("services.text1")}
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "justify" }}>
                  {t("services.text2")}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h5" sx={{ textAlign: "justify" }}>
                  {t("services.text3")}
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "justify" }}>
                  {t("services.text4")}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h5" sx={{ textAlign: "justify" }}>
                  {t("services.text5")}
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "justify" }}>
                  {t("services.text6")}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }} sx={{ px: { xs: 3, sm: 6 } }}>
            <Grid
              size={{ xs: 12 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: theme.palette.primary.dark,
                padding: "1rem",
                color: theme.palette.text.secondary,
                width: 1,
                height: 1,
              }}
            >
              <Typography variant="h5" sx={{ textAlign: "center", mb: "1rem" }}>
                {t("services.amenities")}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box>
                  {services.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        mb: 1.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: "4rem",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <FiberManualRecordIcon sx={{ fontSize: "0.5rem" }} />
                      </Box>
                      <Typography variant="body2">{item.label}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default Services;
