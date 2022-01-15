import React, { useEffect } from "react";


function Tablero(props) {

    useEffect(() => {
        let ul;
        if (props.salieron.length === 0) {
            let fila, i = 0, j;
            while (i < 10) {
                j = 0;
                ul = document.getElementsByTagName('ul')[i];
                fila = ul.getElementsByClassName('salio');
                while (j < fila.length) {
                    fila[j].className = "";
                }
                i++;
            }
        }
        else {
            if (props.salieron.length <= 100) {
                props.salieron.forEach(element => {
                    switch (Math.floor(element / 10)) {
                        case 0:
                            ul = document.getElementsByTagName('ul')[0];
                            break;

                        case 1:
                            ul = document.getElementsByTagName('ul')[1];
                            break;

                        case 2:
                            ul = document.getElementsByTagName('ul')[2];
                            break;

                        case 3:
                            ul = document.getElementsByTagName('ul')[3];
                            break;

                        case 4:
                            ul = document.getElementsByTagName('ul')[4];
                            break;

                        case 5:
                            ul = document.getElementsByTagName('ul')[5];
                            break;

                        case 6:
                            ul = document.getElementsByTagName('ul')[6];
                            break;

                        case 7:
                            ul = document.getElementsByTagName('ul')[7];
                            break;

                        case 8:
                            ul = document.getElementsByTagName('ul')[8];
                            break;

                        default:
                            ul = document.getElementsByTagName('ul')[9];
                            break;
                    }
                    ul.getElementsByTagName('li')[element % 10].className = "salio"
                });
            }
        }
    })

    return (
        <div id="contorno">
            <ul>
                <li>00</li> <li>01</li> <li>02</li> <li>03</li> <li>04</li> <li>05</li> <li>06</li> <li>07</li> <li>08</li> <li>09</li>
            </ul>
            <ul>
                <li>10</li> <li>11</li> <li>12</li> <li>13</li> <li>14</li> <li>15</li> <li>16</li> <li>17</li> <li>18</li> <li>19</li>
            </ul>
            <ul>
                <li>20</li> <li>21</li> <li>22</li> <li>23</li> <li>24</li> <li>25</li> <li>26</li> <li>27</li> <li>28</li> <li>29</li>
            </ul>
            <ul>
                <li>30</li> <li>31</li> <li>32</li> <li>33</li> <li>34</li> <li>35</li> <li>36</li> <li>37</li> <li>38</li> <li>39</li>
            </ul>
            <ul>
                <li>40</li> <li>41</li> <li>42</li> <li>43</li> <li>44</li> <li>45</li> <li>46</li> <li>47</li> <li>48</li> <li>49</li>
            </ul>
            <ul>
                <li>50</li> <li>51</li> <li>52</li> <li>53</li> <li>54</li> <li>55</li> <li>56</li> <li>57</li> <li>58</li> <li>59</li>
            </ul>
            <ul>
                <li>60</li> <li>61</li> <li>62</li> <li>63</li> <li>64</li> <li>65</li> <li>66</li> <li>67</li> <li>68</li> <li>69</li>
            </ul>
            <ul>
                <li>70</li> <li>71</li> <li>72</li> <li>73</li> <li>74</li> <li>75</li> <li>76</li> <li>77</li> <li>78</li> <li>79</li>
            </ul>
            <ul>
                <li>80</li> <li>81</li> <li>82</li> <li>83</li> <li>84</li> <li>85</li> <li>86</li> <li>87</li> <li>88</li> <li>89</li>
            </ul>
            <ul>
                <li>90</li> <li>91</li> <li>92</li> <li>93</li> <li>94</li> <li>95</li> <li>96</li> <li>97</li> <li>98</li> <li>99</li>
            </ul>
        </div>
    )
}

export default Tablero;