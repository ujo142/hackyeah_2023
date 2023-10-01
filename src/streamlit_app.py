import streamlit as st
import pydeck as pdk


style = """
<style>
    .edu {
        font-size: 56px;
        color: white;
        font-weight: bold;
    }
    
    .fajnder {
        font-size: 56px;
        color: red;
        font-weight: bold;
    }
</style>
"""


st.markdown(style, unsafe_allow_html=True)
st.markdown("<span class='edu'>Edu</span><span class='fajnder'>Fajnder</span>", unsafe_allow_html=True)
st.markdown("\n")
st.markdown("\n")
st.markdown("\n")

col1, col2 = st.columns(2)


with col1:
    st.header("Mapa")
    
    view_state = pdk.ViewState(
        latitude=37.7749,
        longitude=-122.4194,
        zoom=10,
    )
    
    st.pydeck_chart(pdk.Deck(
        map_style="mapbox://styles/mapbox/light-v9",
        initial_view_state=view_state,
        layers=[],
    ))

with col2:
    st.header("Interaktywna wyszuiwarka")
    iframe_html = """
        <iframe
            src="https://udify.app/chatbot/v4EOqjG2qNIBUfbR"
            style="width: 100%; height: 100%; min-height: 700px"
            frameborder="0" 
            allow="microphone">
        </iframe>
    """
    
    st.components.v1.html(iframe_html, height=800)
