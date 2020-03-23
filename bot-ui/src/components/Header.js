import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div className = "page-info">
                <div className = "page-header-title-container">
                    <div className = "home-container.page-info.page-header-title-container.page-header-title">
                        CS-BOTS 1.0
                    </div>
                </div>
                <div className = "page-subtitle-container">
                    <div className = "page-subtitle">
                        A Bot-System for Summarization and Classification of Textual Data
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;