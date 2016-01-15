import React from "react";
import Radium from "radium";

@Radium
class Header extends React.Component {
  getHeaderStyles() {
    return {
      base: {
        display: "flex",
        flexWrap: "wrap",
        listStyle: "none",
        justifyContent: "space-between",
        margin: 0,
        padding: "1rem 0.5rem",
        backgroundColor: this.props.backgroundColor,
        textAlign: "center",
        borderBottom: "1px solid rgba(35, 31, 32, 0.02)"
      },
      link: {
        margin: "0 auto",
        lineHeight: 1
      },
      linkStyles: this.props.linkStyles,
      styleOverrides: this.props.styleOverrides
    };
  }

  render() {
    const headerStyles = this.getHeaderStyles();
    return (
      <header
        style={[
          headerStyles.base,
          this.props.styleOverrides && headerStyles.styleOverrides
        ]}>
        <span style={{display: "block"}}>
          <a
            href="mailto:hello@formidable.com"
            style={[
              headerStyles.link,
              this.props.linkStyles && headerStyles.linkStyles
            ]}>
            {this.props.children}
          </a>
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  backgroundColor: React.PropTypes.string,
  children: React.PropTypes.node
};

Header.defaultProps = {
  backgroundColor: "#ebe3db",
  children: "Need React.js consulting? Let’s talk."
};

export default Header;
