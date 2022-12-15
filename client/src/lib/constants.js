import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import EmailIcon from "@mui/icons-material/Email";

const NAVIGATION_ITEMS = [
	{name: 'Home', href: '#', current: true, icon: HomeIcon},
	{name: 'About', href: '#', current: false, icon: InfoIcon},
	{name: 'Contact', href: '#', current: false, icon: EmailIcon}
];

module.exports = {
	NAVIGATION_ITEMS
};