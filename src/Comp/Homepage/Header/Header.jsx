import "./Header.css";
import {Navbar,Nav,Container,NavDropdown,Button} from "react-bootstrap";
import Menu from "../../../json-api/Menu";
import Brand from "../../../json-api/Brand";
const NormalMenu = (data)=>{
  const design = (
    <>
      <Nav.Link href="#home" className={data.menuInfo.button? "nav-link btn btn-primary text-white px-3 nav-btn":"nav-link"}>{data.menuInfo.label}</Nav.Link>
    </>
  );
  return design;
}
const DropDownMenu = (data)=>{
  const design = (
    <>
    <NavDropdown title={data.menuInfo.label} id="dropdown-container">
      <i className="fa fa-caret-up arrow-up"></i>
       {
          data.menuInfo.dropDownMenu.map((data)=>{
            return <NavDropdown.Item href="#action/3.1" key={data.id}>{data.label}</NavDropdown.Item>
          })
       }
     </NavDropdown>
    </>
  );
  return design;
}
const Header = ()=>{
    const design = (
        <>
        <Navbar bg="light" variant="light" expand="lg" className="py-3 border-bottom fixed-top">
            <Container>
              <Navbar.Brand href="#home"><img src="images/logo.png" alt="logo" width="120"/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end w-100">
                    {
                      Menu.map((data)=>{
                        if(data.dropdown){
                          return <DropDownMenu menuInfo={data} key={data.id} />
                        }
                        return <NormalMenu  menuInfo={data} key={data.id}/>

                      })
                    }
                    <Nav.Link href=""><i className="fa fa-phone call"></i> {Brand.helpline}</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

        </>
    );
    return design;
}

export default Header;
