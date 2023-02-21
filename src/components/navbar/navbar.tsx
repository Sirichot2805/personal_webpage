import { Button, Dropdown, Input, Text, Navbar, Link } from "@nextui-org/react";

export const Nav = () => {
  const md_logo_nav = {
    name: "Portfolio",
    url: "#",
  };
  const md_center_nav: any[] = [
    {
      name: "Home",
      url: "www.google.com",
    },
    {
      name: "About",
      url: "",
    },
    {
      name: "My Project",
      url: "",
    },
  ];

  return (
    <>

      <Navbar isBordered variant="floating">
        <Navbar.Brand>

          {
            <Text b color="inherit">
            {md_logo_nav.name}
          </Text>
          }
        </Navbar.Brand>
        
        <Navbar.Content hideIn="xs">
        { md_center_nav.map((md_center_nav:any) => (
        // eslint-disable-next-line react/jsx-key
        <Link href="md_center_nav.url">
        <a><Text b color="inherit" hideIn="xs" >{md_center_nav.name}</Text></a></Link>
        
      ))}
        </Navbar.Content>

        <Navbar.Content>
          <Text b color="inherit">
            Skills
          </Text>
        </Navbar.Content>
      </Navbar>
    </>
  );
};
