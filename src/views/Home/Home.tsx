import AcUnitIcon from "@mui/icons-material/AcUnit";
import BoltIcon from "@mui/icons-material/Bolt";
import { default as ElectricalServicesIcon } from "@mui/icons-material/ElectricalServices";
import ForestIcon from "@mui/icons-material/Forest";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Card, CardContent, Container, Grid, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import HandshakeIcon from "../../widgets/CustomIcons/HandshakeIcon";

export default function Home() {
  const { t } = useTranslation();
  const theme = useTheme();

  const services = [
    {
      key: "electrical",
      icon: (
        <ElectricalServicesIcon sx={{ fontSize: 50, color: "primary.main" }} />
      ),
      title: t("home.services.electrical.title"),
      description: t("home.services.electrical.description"),
    },
    {
      key: "energy",
      icon: <ForestIcon sx={{ fontSize: 50, color: "success.main" }} />,
      title: t("home.services.energy.title"),
      description: t("home.services.energy.description"),
    },
    {
      key: "airConditioning",
      icon: <AcUnitIcon sx={{ fontSize: 50, color: "info.main" }} />,
      title: t("home.services.airConditioning.title"),
      description: t("home.services.airConditioning.description"),
    },
  ];

  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        py: 3,
        display: "flex",
      }}
    >
      <Grid container spacing={4}>
        <Grid size={{ xs: 12 }}>
          <Box component="section">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ textAlign: "center" }}
            >
              {t("home.title")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {t("home.text1")}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {t("home.text2")}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {t("home.text3")}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {t("home.text4")}
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* <Grid size={{ xs: 12 }}>
          <Divider />
        </Grid> */}

        <Grid
          size={{ xs: 12 }}
          sx={{
            display: "flex",
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.text.secondary,
            py: 3,
          }}
        >
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

        <Grid size={{ xs: 12 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              fontWeight="bold"
            >
              {t("home.services.headerTitle")}
            </Typography>
            <Typography variant="subtitle1" maxWidth={600} mx="auto">
              {t("home.services.headerSubtitle")}
            </Typography>
          </Box>
        </Grid>

        {services.map(({ icon, title, description }, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Card
              sx={{
                height: "100%",
                boxShadow: 6,
                bgcolor: "background.paper",
                transition: "transform 0.3s ease, boxShadow 0.3s ease",
                "&:hover": {
                  boxShadow: 12,
                  transform: "translateY(-8px)",
                },
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    mb: 3,
                    minHeight: 80,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {icon}
                </Box>

                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  align="center"
                  fontWeight="bold"
                  sx={{ minHeight: 56 }}
                >
                  {title}
                </Typography>

                <Typography variant="body1" align="center" sx={{ flexGrow: 1 }}>
                  {description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
