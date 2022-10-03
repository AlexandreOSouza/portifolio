import { TabPanel, Text } from "@chakra-ui/react";

const textAbout = `
1&nbsp;&nbsp;/**</br>
2&nbsp;&nbsp;&nbsp;* About me</br>
3&nbsp;&nbsp;&nbsp;* I have 5 years of еxperience in web</br>
4&nbsp;&nbsp;&nbsp;* development lorem ipsum dolor sit amet,</br>
5&nbsp;&nbsp;&nbsp;* consectetur adipiscing elit, sed do eiusmod</br>
6&nbsp;&nbsp;&nbsp;* tempor incididunt ut labore et dolore</br>
7&nbsp;&nbsp;&nbsp;* magna aliqua. Ut enim ad minim veniam,</br>
8&nbsp;&nbsp;&nbsp;* quis nostrud exercitation ullamco laboris</br>
9&nbsp;&nbsp;&nbsp;* nisi ut aliquip ex ea commodo consequat.</br>
10&nbsp;&nbsp;* Duis aute irure dolor in reprehenderit in</br>
11&nbsp;&nbsp;* </br>
12&nbsp;&nbsp;* Duis aute irure dolor in reprehenderit in </br>
13&nbsp;&nbsp;* voluptate velit esse cillum dolore eu fugiat </br>
14&nbsp;&nbsp;* nulla pariatur. Excepteur sint occaecat  </br>
15&nbsp;&nbsp;* officia deserunt mollit anim id est laborum.</br>
16&nbsp;&nbsp;*/`;

const IndexPanel = () => {
  return (
    <TabPanel pl={"39px"} pt={"17px"}>
      <Text color={"secondary.gray"}>
        <div dangerouslySetInnerHTML={{ __html: textAbout }}></div>
      </Text>
    </TabPanel>
  );
};

export default IndexPanel;
