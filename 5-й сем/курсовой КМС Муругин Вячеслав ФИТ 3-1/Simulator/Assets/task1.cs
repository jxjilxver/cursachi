using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;

public class task1 : MonoBehaviour, IPointerClickHandler, IPointerEnterHandler, IPointerExitHandler
{
    [SerializeField] Light light;
    [SerializeField] Text helpText;
    [SerializeField] Text taskText;
    [SerializeField] Text taskNumber;
    [SerializeField] GameObject voltArrow;
    Quaternion startRot;
    Vector3 needRot;
    Quaternion voltStartRot;
    Vector3 voltNeedRot;
    bool move=false;
    bool moveVolt = false;
    float speed = 0.02f;
    float offset = 0;
    float voltOffset = 0;
    Outline outline;
    

    public void OnPointerClick(PointerEventData eventData)
    {
        startRot = transform.rotation;
        voltStartRot = voltArrow.transform.rotation;
        needRot = new Vector3(-90f, startRot.y, startRot.z);
        voltNeedRot = new Vector3(-9.135f, -96.58701f, 34.582f);
        move = true;

    }

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
        light.intensity = 0;
        helpText.text = "Чтобы замкнуть цепь, нужно нажать на ключ левой кнопкой мыши.";
        taskNumber.text = "Задание №1";
        taskText.text = "Замкните цепь с помощью ключа";
    }

    // Update is called once per frame
    void Update()
    {
        if (move)
        {
            offset += speed;
            transform.rotation = Quaternion.Lerp(startRot, Quaternion.Euler(needRot), offset);
            if (offset>=1)
            {
                move = false;
                moveVolt = true;
                offset = 0;
                voltOffset = 0;
                light.intensity = 60;
                taskText.text = "Установите реостат в крайнее левое положение, после чего занесите значения из амперметра и вольтметра в таблицу";
                taskNumber.text = "Задание №2";
                helpText.text = "Чтобы двигать ползунок реостата, используйте клавишу Q для перемещения влево и клавишу E для перемещения вправо.";
            }
        }
        if (moveVolt)
        {
            voltOffset += speed;
            voltArrow.transform.rotation = Quaternion.Lerp(voltStartRot, Quaternion.Euler(voltNeedRot), voltOffset);
            if (voltOffset == 1)
            {
                moveVolt = false;
                voltOffset = 0;
            }
        }
    }
}