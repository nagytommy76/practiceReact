import React, { useState } from 'react'
import { connect } from 'react-redux'
import { savePost } from '../../../../Store/Actions/index'

import FormItem from '../../../BaseUtility/FormInput/FormInput'
import Button from '../../../BaseUtility/Button/BaseButton'
import classes from './Form.module.scss'

const Form = ({ setSinglePost}) => {
    const [formTitle, setFormTitle] = useState('')
    const [formBody, setFormBody] = useState('')

    const submitEvent = (event) =>{
        event.preventDefault()
        setFormTitle('')
        setFormBody('')
        setSinglePost(formBody, formTitle)
    }

    return (
        <form onSubmit={submitEvent} className={classes.FormArea}>
            <FormItem 
                labelText="Post Title"
                placeholder="Enter your post TITLE here..."
                inputValue={formTitle}
                setInputVal={(e) => setFormTitle(e.target.value)}
            />
            <FormItem 
                labelText="Post Body"
                placeholder="Enter your post BODY here..."
                inputValue={formBody}
                setInputVal={(e) => setFormBody(e.target.value)}
            />
            <Button text="Még egy poszt hozzáad"/>
        </form>
    )
}

const mapDispatchToProps = dispatch => {
    return{
        setSinglePost: (body,title) => dispatch(savePost({id: Math.floor(Math.random() * 1000), body, title}))
    }
}

export default connect(null, mapDispatchToProps)(Form)
