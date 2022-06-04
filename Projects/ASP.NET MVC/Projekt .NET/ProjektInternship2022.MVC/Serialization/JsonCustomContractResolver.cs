using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EternaFin.MVC.Serialization
{
    public class JsonCustomContractResolver: DefaultContractResolver
    {

        protected override IList<JsonProperty> CreateProperties(Type type, MemberSerialization memberSerialization)
        {
            // Exclude Parent property from being serialized (otherwise a loop is ecountered)

            IList<JsonProperty> properties = base.CreateProperties(type, memberSerialization);

            // only serializer properties that fulfill a specific condition
            properties = properties.Where(p => !p.PropertyName.Equals("Parent")).ToList();

            return properties;
        }



    }
}
