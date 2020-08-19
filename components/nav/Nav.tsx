import React from 'react'
import Homes from '../../views/home/home.module.scss';
import useStore from  '../../context/usecontext'
import { useObserver } from 'mobx-react-lite'
import { IuserInfo } from '../../utils/interface'
export default function Nav() {
    let { mirChen } = useStore()
    return useObserver(()=>(
            <div className={Homes.header_logo}>
                <div className={Homes.imgs}>

                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
                </div>
                <div className={Homes.users}>
                    <span></span>
                    <span>
                        {
                            (mirChen.userInfo as IuserInfo).user_name
                        }
                    </span>
                </div>
            </div>
        )
    )
}
