import React from 'react'
import {Card, Badge, Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import './App.css'

export default function Job({job}) {

    const [open,setOpen] = React.useState(false)
    return (
        <Card className="mb-3">
            <Card.Body>
                <div >
                   <div>
                        <Card.Title>
                        {job.title} - <span className="text-muted
                        font-weight-light"> {job.company}</span>
                        </Card.Title>
                        <Card.Subtitle>
                            {new Date(Date.now).toLocaleDateString}
                        </Card.Subtitle>
                              <Badge variant="secondary" className="mr-2">{job.type}</Badge>
                              <Badge variant="secondary">{job.location}</Badge>
                              <div style={{wordBreak: 'break-all'}}>
                                     <ReactMarkdown source={job.how_to_apply}/>
                              </div>
                    </div>

                            <img className="d-none d-md-block" height="50" alt={job.company} src={job.company_logo}/>

                </div>
                    <Card.Text>
                        <Button onClick={()=>setOpen(prevOpen=> !prevOpen)}
                                variant="primary">{!open ?'View Details':'Hide Details'}</Button>
                    </Card.Text>
                    <Collapse in={open}>
                    <div className="mt-4">
                        <ReactMarkdown source={job.description}/>

                    </div>
                    </Collapse>

            </Card.Body>


        </Card>


    )
}

