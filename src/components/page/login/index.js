import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { logaUsuario } from '../../../actions'


const Login = ({ usuario, logaUsuario }) => (
    usuario ? (
        <Redirect to="/" /> 
    ) : ( 
        <article className="container">
            <h1>Faça login</h1>
            <form>
                <label htmlFor="email">
                    <input id="email" type="email" placeholder="E-mail" />
                </label>
                <label htmlFor="senha">
                    <input id="senha" type="password" placeholder="senha" />
                </label>
                <button onClick={logaUsuario}>Logar</button>
            </form>
        </article>
    )
)

const mapStateToProps = state => {
    return {
        usuario: state.usuario
    }
}

const mapDispatchToProps = dispatch => (
    {
        logaUsuario: () => {
            dispatch(logaUsuario())
        }
    }
)


export default connect(mapStateToProps, mapDispatchToProps)(Login)