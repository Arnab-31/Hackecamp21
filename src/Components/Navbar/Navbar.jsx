import React from 'react'
import NavLeft from './NavLeft'
import NavRight from './NavRight'
import styles from "./Navbar.module.css"
import NavSearch from "./NavSearch"
import styled from "styled-components"
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom"


const SearchDiv=styled.div`
    display: none;
    position: absolute;
    width: 15%;
    height: 42vh;
    margin-left:-50px;
    margin-top:30px;
    background-color: white;
    text-align: left;
    transition-delay:20s;
    transition-duration: 2s;
`

const NavLinkdiv= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: white;
    width: 30%;
    margin-left: 0%;
`

const LinkContainer= styled.div`
    width: 30%;
    margin:2%;
    margin-top: 16px;
    height: 5vh;
    background-color:white;
    padding-top: 4px;

&:hover{
  
    border-bottom: 4px solid #f04d68;
    cursor: pointer;
    
}
&:hover ${SearchDiv}{
transition-delay:20s;
transition-duration: 2s;
 display :block;
}
`

const Navtitle = styled.p`
    font-size: 12px;
    background-color: white;
    &:hover ${SearchDiv}{
        display :block;
       transition-duration: 2s;
       transition-delay:20s;
    }
`

function Navbar() {
    const navData=[
        {title:"PRODUCTS",
        sub:"Topwear",
        list:["t-shirt","formal Shirts","jackets","casual shirts","Blazers","suits"]},

        // {title:"women",
        // sub:"Indian Fusion",
        // list:["kurtas","saree","salvaars","dress materials","Tops","skirts&palazzos"]},

        // {title:"kids",
        // sub:"Topwear",
        // list:["t-shirt","shirts","jeans","shorts","trousers","ethnic wear"]},

        // {title:"home&livings",
        // sub:"Topwear",
        // list:["bedsheets","blankets","bedding sets","bed covers","pillows","pillow covers"]},

        // {title:"beauty",
        // sub:"Topwear",
        // list:["lipstick","lip gloss","lip liner","eye liner","kajal","foundation"]},

        // {title:"FEED",
        // sub:"Available Feeds",
        // list:["General","Pepe Jeans","Roadster Shirts","Turtle Pants","Highlander Tshirts","Nike Shoes"]}
    ]

    const navData2=[{title:"FEED",
    sub:"Available Feeds",
    list:["General","Pepe Jeans","Roadster Shirts","Turtle Pants","Highlander Tshirts","Nike Shoes"]}
    ]
    let history = useHistory();
    const handleClick=(el)=>{
        el=el.toLowerCase()
        const param= new URLSearchParams(`category=${el}`)
        history.push(`/result?${param}`)
    }
    

    return (
        <div className={styles.navbar}>
            <NavLeft/>
            <NavLinkdiv>
                       {navData.map((item,j)=>(
                          <LinkContainer key={j}>
                            <Link className={styles.navLinks} to={`/result?category=casual+shirts`}><h4>{item.title.toUpperCase()}</h4></Link>
                            <SearchDiv >
                                <h5 className={styles.navLinks3}>{item.sub}</h5>
                                {item.list.map((el,z)=>(<Navtitle onClick={()=>handleClick(el)} className={styles.navLinks2}>{el.toUpperCase()}</Navtitle>))}
                                
                            
                            </SearchDiv>
                            
                            </LinkContainer>
                       ))}
                    <LinkContainer>
                        <Link className={styles.navLinks} to={"/productfeed/0"}><h4>FEED</h4></Link>
                        <SearchDiv >
                                <h5 className={styles.navLinks3}>Available Feeds</h5>
                                {navData2[0].list.map((el,z)=>(<Navtitle className={styles.navLinks2}><Link to={`/productfeed/${z}`} className={styles.links}>{el.toUpperCase()}</Link></Navtitle>))}
                                
                            
                        </SearchDiv>
                    </LinkContainer>
            </NavLinkdiv>
            <NavSearch/>
            <NavRight/> 
        </div>
    )
}

export default Navbar
