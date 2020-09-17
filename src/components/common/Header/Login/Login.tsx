import * as React from 'react'
import * as queryString from 'query-string'

type LoginPropsType = {

}

type LoginStateType = {
    values: {
        username: string,
        password: string
    }
}

class Login extends React.Component<LoginPropsType,LoginStateType> {
    constructor(props: any) {
        super(props)
        this.state = {
            values:  {
                username: "belka",
                password: "zxcvbn",
            }
        }
        this.logIn = this.logIn.bind(this)
    }

    logIn(e : any) {
        e.preventDefault()
        console.log('dvaterMerro')
        const url = "https://api.themoviedb.org/3/authentication/token/new"
        const queryStringParams = {
            api_key: "4237669ebd35e8010beee2f55fd45546",
        }
        fetch(`${url}?${queryString.stringify(queryStringParams)}`, {
            mode: "cors",
            headers: {
                "Content-type": "application/json"
                }
            })
            .then(response => {
               console.log(response)
            })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.logIn}>
                    <button
                        type="submit"
                    >
                        ВОЙТИ
                    </button>
                </form>
            </div>
        )
    }
}

export default Login;