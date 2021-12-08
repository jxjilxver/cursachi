using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class task2 : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler
{
    [SerializeField] Light lamp;
    Outline outline;
    Vector3 newPos;
    [SerializeField] Text taskNumber;
    public void OnPointerEnter(PointerEventData eventData)
    {
        outline.enabled = true;
    }

    public void OnPointerExit(PointerEventData eventData)
    {
        outline.enabled = false;
    }

    // Start is called before the first frame update
    void Start()
    {
        outline = GetComponent<Outline>();
    }

    // Update is called once per frame
    void Update()
    {
        if (taskNumber.text == "Задание №2")
        {
            if (Input.GetKey(KeyCode.Q))
            {
                newPos = transform.position + new Vector3(0.01f, 0, 0);
                if (newPos.x < 2.09f)
                {
                    transform.position = newPos;
                    lamp.intensity += 1;
                }
            }
            if (Input.GetKey(KeyCode.E))
            {
                newPos = transform.position - new Vector3(0.01f, 0, 0);
                if (newPos.x > 1)
                {
                    transform.position = newPos;
                    if(lamp.intensity>=15)
                        lamp.intensity -= 1;
                }
            }
        }
    }
}
