import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const pages = [
    { name: t("header.home"), link: "/" },
    { name: t("header.services"), link: "/services" },
    { name: t("header.about"), link: "/about" },
    { name: t("header.contact"), link: "/contact" },
  ];

  const renderDesktopNav = (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
        width: 1,
      }}
    >
      <Box sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        <img src={logo} alt="electroclima-logo" height={80} />
      </Box>

      <Box>
        {pages.map((page) => (
          <Button
            key={page.link}
            color="inherit"
            component={RouterLink}
            to={page.link}
          >
            {page.name}
          </Button>
        ))}
      </Box>
    </Box>
  );

  const renderMobileNav = (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        width: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        padding: "1rem 0",
      }}
    >
      {/* Hamburger Menu (Left) */}
      <IconButton
        color="inherit"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ zIndex: 2 }}
      >
        <MenuIcon />
      </IconButton>

      {/* Centered Logo */}
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="electroclima-logo" height={60} />
      </Box>

      {/* Drawer */}
      <Drawer
        anchor="left"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { width: 240 },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            {t("header.myApp")}
          </Typography>
          <Divider />
          <List>
            {pages.map((page) => (
              <ListItem
                key={page.link}
                disablePadding
                onClick={() => {
                  navigate(page.link);
                  handleDrawerToggle();
                }}
              >
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={page.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        zIndex: (theme) => theme.zIndex.appBar,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ py: 2 }}>
          {renderDesktopNav}
          {renderMobileNav}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
