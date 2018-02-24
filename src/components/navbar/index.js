import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deslogaUsuario } from '../../actions'
import './navbar.css'


const Navbar = ({ usuario, deslogaUsuario }) => (
    <nav className="navbar">
        <h1 className="navbar__logo">
            <Link to="/">Post-It</Link>
        </h1>
        <ul className="navbar__links">
            <li><Link to="/quem-somos">Quem somos</Link></li>
            <li><Link to="/contato">Contato</Link></li>
            {!usuario && (
            <li><Link to="/login">Login</Link></li>
            )}
            {usuario && (
            <li>
                <a onClick={deslogaUsuario}>
                    Sair <i className="navbar__logout fa fa-sign-out"></i>
                </a>
            </li>
            )}
        </ul>
    </nav>
)

const mapStateToProps = state => (
    {
        usuario: state.usuario
    }
)

const mapDispatchToProps = dispatch => (
    {
        deslogaUsuario: () => {
            dispatch(deslogaUsuario())
        }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)