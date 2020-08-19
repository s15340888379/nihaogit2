import React from 'react';
import { Iroute } from '../utils/interface';
import { Switch, Route, Redirect } from 'react-router-dom'
export interface Iprops {
    routes: Iroute[]
}
export default function routerViews(props: Iprops) {
    
    const route = props.routes.filter(item => item.component);
    const redirect = props.routes.filter(item=>item.to);
    return (
        <Switch>
                {
                    route.map((item,index)=>{
                        return <Route key={index} path={item.path} render={(props)=>{
                            return <item.component routes={item.children} {...props} ></item.component>
                        }}>

                        </Route>
                    })
                }
                {
                    redirect.map((item,index) => {
                        return <Redirect key= {index} from ={item.path} to= {item.to as string} >

                        </Redirect>
                         
                    })
                }
        </Switch>
    )
}
