using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class OpenHelp : MonoBehaviour
{
    RectTransform UIGameobject;
    float width;
    float changeX;
    float speedPanel;
    enum states { open, close, opening, closing };
    states state = states.close;
    // Start is called before the first frame update
    void Start()
    {
        UIGameobject = gameObject.GetComponent<RectTransform>();
        width = UIGameobject.sizeDelta.x;
        speedPanel = 150;

    }

    public void ChangePanel()
    {
        if (state == states.open) state = states.closing;
        if (state == states.close) state = states.opening;
        changeX = 0;
    }


    // Update is called once per frame
    void Update()
    {
        if (state == states.closing)
        {
            float x = UIGameobject.anchoredPosition.x;
            float y = UIGameobject.anchoredPosition.y;
            y -= speedPanel;
            changeX += speedPanel;
            UIGameobject.anchoredPosition = new Vector2(x, 1426.534f);
            if (changeX > width)
            {
                state = states.close;
            }
        }

        if (state == states.opening)
        {
            float x = UIGameobject.anchoredPosition.x;
            float y = UIGameobject.anchoredPosition.y;
            y += speedPanel;
            changeX += speedPanel;
            UIGameobject.anchoredPosition = new Vector2(x, -370);
            if (changeX > width)
            {
                state = states.open;
            }

        }

    }
}
