import React from 'react'
import AgentProfileCard from './AgentsComponents/AgentProfileCard/AgentProfileCard.jsx'
import { AgentsLayoutContainer } from './AgentsPage.styles'

const AgentsPage = () => {
  return (
    <AgentsLayoutContainer>
        <header className="intro">
          <h3 className="title">All Agents</h3>
          <div className="subtitle">Welcome To Makeup Studio</div>
        </header>
        <main className="body">
          <AgentProfileCard/>
          <AgentProfileCard/>
          <AgentProfileCard/>
          <AgentProfileCard/>
        </main>
    </AgentsLayoutContainer>
  )
}

export default AgentsPage
