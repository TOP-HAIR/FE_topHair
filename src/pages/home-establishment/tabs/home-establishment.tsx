import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import AssignmentIcon from "@mui/icons-material/Assignment";
import StoreIcon from "@mui/icons-material/Store";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";
// import SettingsIcon from "@mui/icons-material/Settings";
import TopHair from "../../../assets/configs/img/logo/top-hair-logo-white-version 2.svg";
import { useNavigate, Outlet } from "react-router-dom";
import { navigateToPage } from "../../../shared/hooks/utils/navigatePage";
import {
  Box,
  Drawer,
  IconButton,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

interface SidebarProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const links = [
  {
    key: "home",
    to: "/establishment/home",
    text: "Inicio",
    icon: <HomeIcon />,
  },
  {
    key: "calendar",
    to: "/establishment/calendar",
    text: "Calendário",
    icon: <CalendarMonthIcon />,
  },
  // {
  //   key: "reports",
  //   to: "/establishment/reports/list",
  //   text: "Relatórios",
  //   icon: <AssignmentIcon />,
  // },
  {
    key: "shop",
    to: "/establishment/shop",
    text: "Estabelecimento",
    icon: <StoreIcon />,
  },
  {
    key: "service",
    to: "/establishment/service/list",
    text: "Serviços",
    icon: <BuildCircleIcon />,
  },
  {
    key: "comments",
    to: "/establishment/comments",
    text: "Comentários",
    icon: <InsertCommentIcon />,
  },
  {
    key: "employees",
    to: "/establishment/employees/list",
    text: "Funcionários",
    icon: <PeopleIcon />,
  },
];

const userSettings = [
  // {
  //   key: "settings",
  //   to: "/",
  //   text: "Configurações",
  //   icon: <SettingsIcon />,
  // },
  {
    key: "logout",
    to: "/",
    text: "Logout",
    icon: <LogoutIcon />,
  },
];

export default function HomeEstablishment() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const usuarioString = sessionStorage.getItem("dataLocal");

    if (usuarioString) {
      const usuario = JSON.parse(usuarioString);
      const { nomeCompleto } = usuario;
      setUserName(nomeCompleto);
    }
  }, []);

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
  };

  const linkActiveNavigate = (key: string, to: string) => {
    handleLinkClick(key);
    navigateToPage(navigate, to);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 300;

  const drawer = (
    <aside
      style={{
        minWidth: "18rem",
        height: "100vh",
        borderRadius: 0,
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={TopHair}
          style={{
            height: mobileOpen ? "8rem" : "12rem",
          }}
          alt="Logo da TopHair"
        />
      </div>
      <Divider sx={{ backgroundColor: "#6d6d6d33", height: "2px" }} />
      <List
        className="h-full w-full"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          {links.map(({ key, to, text, icon }) => (
            <ListItem
              key={key}
              button
              selected={activeLink === key}
              onClick={() => linkActiveNavigate(key, to)}
              className="text-white"
              sx={{
                px: 4,
                py: 3,
                my: 2,
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                background:
                  activeLink === key
                    ? "linear-gradient(to right, #0184c8, #24ceef)"
                    : "none",
                "&:hover": {
                  background: "linear-gradient(to right, #0184c8, #24ceef)",
                  backgroundColor: "#0184c8",
                  color: "#ffffff",
                },
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
              <ListItemText sx={{ color: "white" }} primary={text} />
            </ListItem>
          ))}
        </div>
        <Divider sx={{ backgroundColor: "#6d6d6d33", height: "2px" }} />
        <div className="mt-auto w-full">
          {userSettings.map(({ key, to, text, icon }) => (
            <ListItem
              key={key}
              button
              selected={activeLink === key}
              onClick={() => linkActiveNavigate(key, to)}
              className="text-white"
              sx={{
                px: 4,
                py: 3,
                my: 1,
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                background:
                  activeLink === key
                    ? "linear-gradient(to right, #0184c8, #24ceef)"
                    : "none",
                "&:hover": {
                  background: "linear-gradient(to right, #0184c8, #24ceef)",
                  backgroundColor: "#0184c8",
                  color: "#ffffff",
                },
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
              <ListItemText sx={{ color: "white" }} primary={text} />
            </ListItem>
          ))}
        </div>
      </List>
    </aside>
  );

  const Sidebar: React.FC<SidebarProps> = ({
    mobileOpen,
    handleDrawerToggle,
  }) => {
    return (
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundImage:
                "linear-gradient(180deg, #0f3d3a 0%, #041720 100%)",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundImage:
                "linear-gradient(180deg, #0f3d3a 0%, #041720 100%)",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    );
  };
  return (
    <>
      <div className="h-screen flex ">
        <Sidebar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <div className="w-full min-h-full overflow-auto">
            <header className="h-18 bg-gradient-to-r from-gray-200 to-white border-b border-gray-300 z-50">
              <div className="h-full flex items-center justify-between px-10">
                <div className="flex items-center">
                  <button id="menuBtn" className="lg:hidden">
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      edge="start"
                      onClick={handleDrawerToggle}
                      sx={{ mr: 2, display: { md: "none" } }}
                    >
                      <MenuIcon />
                    </IconButton>
                  </button>
                  <div className="space-x-4"></div>
                  <h1 className="text-2xl font-medium uppercase">
                    {activeLink || ""}
                  </h1>
                </div>
                <div className="flex items-center gap-8">
                  <img
                    className="h-16 w-16"
                    src={TopHair}
                    alt="Logo do Estabelecimento"
                  />
                  <div className="bg-gray-300 h-10 w-0.5 rounded-full"></div>
                  <p className="text-xl font-light lg:mr-20 flex">
                    Bem-vindo,{" "}
                    <p className="color-primary-aqua text-xl font-light ml-2">
                      {userName}.
                    </p>
                  </p>
                </div>
              </div>
            </header>
            <div className="flex flex-col justify-between min-h-screen">
              <Outlet />
              <p className="mb-4 mt-6 text-sm text-center text-black">
                Copyright © made by Top Hair
              </p>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}
